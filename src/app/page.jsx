"use client";
import { useProfile } from "./profile/hooks/useProfile";
import { ProfileInfo } from "./profile/components/ProfileInfo";

export default function ProfilePage() {
  const { profile, loading, handleLogout } = useProfile();

  return (
    <ProfileInfo
      profile={profile}
      loading={loading}
      handleLogout={handleLogout}
    />
  );
}
