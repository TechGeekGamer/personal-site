import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function BuildPatchModal() {
  let [isPatchAcked, setIsPatchAcked] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function removePatch() {
    document.cookie = "build_patch=;expires=" + new Date(0).toUTCString();
    window.location.reload();
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  if (getCookie("build_patch") && isOpen === false && isPatchAcked === false) {
    console.log("OPEN");
    setIsPatchAcked(true);
    openModal();
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Build Patch Detected
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You're currently using the{" "}
                    <span className="font-bold">
                      {getCookie("build_patch")}
                    </span>{" "}
                    build patch. You may see a different version than the
                    production build. To return to production, you can either
                    remove the <code>build_patch</code> cookie, or press the
                    remove button below.
                  </p>
                </div>

                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={removePatch}
                  >
                    Remove it now
                  </button>
                  <button
                    type="button"
                    className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Alright
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default BuildPatchModal;
