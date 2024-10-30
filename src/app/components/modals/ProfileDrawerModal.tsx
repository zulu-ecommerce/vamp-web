import Image from "next/image";
import React from "react";

import BottomSheetModal from "@/app/components/modals/BottomSheetModal";
import { Button } from "@/app/components/elements/Button";

import profile from "../../../../public/assets/icons/profile.svg";

interface ProfileDrawerModalProps {
  handleClose: () => void;
  modalOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
}
const ProfileDrawerModal = ({
  handleClose,
  modalOpen,
  modalRef,
}: ProfileDrawerModalProps) => {
  return (
    <BottomSheetModal
      handleClose={handleClose}
      modalOpen={modalOpen}
      modalRef={modalRef}
      title="Profile"
    >
      <div className="px-6 flex items-center py-5 gap-4">
        <div className="w-10 min-w-[40px] bg-black aspect-square rounded-full centered">
          <Image src={profile} alt="profile-icon" className="w-6 h-auto" />
        </div>
        <p className="text-black">OLOLADEMI ASAKE</p>
      </div>
      <div className="space-y-2 px-6 mb-4">
        <Button variant="outline" className="flex-1 w-full block">
          My orders
        </Button>
        <Button variant="danger" className="w-full block flex-1">
          Logout
        </Button>
      </div>
    </BottomSheetModal>
  );
};

export default ProfileDrawerModal;
