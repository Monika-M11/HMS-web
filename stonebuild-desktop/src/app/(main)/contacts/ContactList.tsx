 "use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { postAPI } from "@/app/utils/api";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

type Contact = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  bank_name: string;
  state: string | number;
  pincode: string | number;
  address: string;
  created_at: string;
  status: string | number;
  ifsc: string;
};

export default function ContactList() {
  const LIMIT = 10;

  const router = useRouter();
  const pathname = usePathname();

  const [contactList, setContactList] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const didInitialFetchRef = useRef(false);

  // 🔥 FETCH CONTACTS
  const fetchContacts = useCallback(
    async (opts: { offset?: number; limit?: number; reset?: boolean } = {}) => {
      const off = typeof opts.offset === "number" ? opts.offset : offset;
      const lim = opts.limit ?? LIMIT;
      const resetFlag = opts.reset ?? false;

      try {
        resetFlag ? setLoading(true) : setFetchingMore(true);

        const res = await postAPI(
          "/contact-list",
          { data: { offset: off, limit: lim } },
          true
        );

        if (res?.status === "success" && res.data && Array.isArray(res.data.contacts)) {
          if (resetFlag) {
            setContactList(res.data.contacts);
            setOffset(off + res.data.contacts.length);
            setHasMore(res.data.contacts.length === lim);
          } else {
            setContactList((prev) => {
              const existingIds = new Set(prev.map((p) => p.id));
              const newItems = res.data.contacts.filter(
                (r: Contact) => !existingIds.has(r.id)
              );

              const next = [...prev, ...newItems];
              setOffset(off + newItems.length);
              setHasMore(newItems.length === lim);

              return next;
            });
          }
        } else {
          if (resetFlag) setContactList([]);
          setHasMore(false);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch contacts ❌");
      } finally {
        setLoading(false);
        setFetchingMore(false);
      }
    },
    [offset]
  );

  // 🔥 INITIAL LOAD
  useEffect(() => {
    if (didInitialFetchRef.current) return;

    didInitialFetchRef.current = true;
    setOffset(0);
    setHasMore(true);

    fetchContacts({ offset: 0, limit: LIMIT, reset: true });
  }, []);

  // 🔥 INFINITE SCROLL
  const lastRowRef = useCallback(
    (node: HTMLElement | null) => {
      if (fetchingMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchContacts({ offset, limit: LIMIT });
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchContacts, hasMore, offset, loading, fetchingMore]
  );

  // 🔥 REFRESH
  const handleRefresh = () => {
    setOffset(0);
    setHasMore(true);
    fetchContacts({ offset: 0, limit: LIMIT, reset: true });
  };

  // 🔥 EDIT
  const handleEdit = (id: string) => {
    router.push(`${pathname}?edit-id=${id}`);
  };

  // 🔥 STATUS TOGGLE
  const handleStatusToggle = async (
    contact_id: string,
    currentStatus: string | number
  ) => {
    const newStatus = Number(currentStatus) === 1 ? 0 : 1;

    try {
      const res = await postAPI(
        "/update-contact-status",
        { data: { contact_id, status: newStatus } },
        true
      );

      if (res.status === "success") {
        setContactList((prev) =>
          prev.map((item) =>
            item.id === contact_id
              ? { ...item, status: newStatus }
              : item
          )
        );

        toast.success("Status updated ✔");
      } else {
        toast.error(res.message || "Failed ❌");
      }
    } catch (err: any) {
      toast.error(err.message || "Error ❌");
    }
  };

  return (
    <div className="bg-white ">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <Button
          onClick={handleRefresh}
          disabled={loading || fetchingMore}
        >
          {loading ? "Refreshing..." : "↻ Refresh"}
        </Button>
      </div>

      {/* TABLE */}
      <div className="max-h-[calc(100vh-230px)] overflow-y-auto border rounded-lg">
        <table className="table-default w-full">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th className="text-center">S.no</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th className="text-center">Pincode</th>
              <th>State</th>
              <th>Status</th>
              <th className="text-center">Created At</th>
            </tr>
          </thead>

          <tbody>
            {contactList.map((item, idx) => {
              const isLast = idx === contactList.length - 1;

              return (
                <tr
                  key={`${item.id}-${idx}`}
                  ref={isLast ? lastRowRef : null}
                  className="border-b"
                >
                  <td className="text-center">{idx + 1}</td>

                  <td
                    className="cursor-pointer hover:text-[#103BB5]"
                    onClick={() => handleEdit(item.id)}
                  >
                    {item.full_name}
                  </td>

                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>

                  <td className="text-center">{item.pincode}</td>
                  <td>{item.state}</td>

                  {/* STATUS SWITCH */}
                  <td className="text-center">
                    <button
                      onClick={() =>
                        handleStatusToggle(item.id, item.status)
                      }
                      className={`relative inline-flex h-5 w-10 items-center rounded-full transition
                      ${
                        Number(item.status) === 1
                          ? "bg-[#103BB5]"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition
                        ${
                          Number(item.status) === 1
                            ? "translate-x-5"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </td>

                  <td className="text-center">
                    {new Date(item.created_at).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* LOAD MORE */}
        {fetchingMore && (
          <div className="p-3 text-center text-sm text-gray-600">
            Loading more...
          </div>
        )}

        {!hasMore && contactList.length > 0 && (
          <div className="p-3 text-center text-sm text-gray-600">
            No more contacts
          </div>
        )}
      </div>
    </div>
  );
}