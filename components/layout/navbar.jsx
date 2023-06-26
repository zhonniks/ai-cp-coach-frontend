// "use client";

// import useScroll from "@/lib/hooks/use-scroll";
// import Link from "next/link";
// import { useSignInModal } from "./sign-in-modal";
// import UserDropdown from "./user-dropdown";

// export default function NavBar({ session }) {
//   const { SignInModal, setShowSignInModal } = useSignInModal();
//   const scrolled = useScroll(50);

//   return (
//     <>
//       <SignInModal />
//       <div
//         className={`fixed top-0 w-full ${scrolled
//           ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
//           : "bg-white/0"
//           } z-30 transition-all`}
//       >
//         <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
//           <Link href="/" className="flex items-center font-display text-2xl">
//             <p>AI-CP coach</p>
//           </Link>

//         <div>
//           {session ? (
//               <UserDropdown session={session} />
//             ) : (
//               <button
//                 className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
//                 onClick={() => setShowSignInModal(true)}
//               >
//                 Sign In
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import useScroll from "@/lib/hooks/use-scroll";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>AI-CP coach</p>
          </Link>
        <div>
          {/* <Calendar /> */}
          <Link href="/">Calendar</Link>
        </div>

        <div>
          {/* <Calendar /> */}
          <Link href="/">Progress</Link>
        </div>

        <div>
          {/* <Calendar /> */}
          <Link href="/">Topic</Link>
        </div>

          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

