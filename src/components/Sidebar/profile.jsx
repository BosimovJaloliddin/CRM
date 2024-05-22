import { ProfileContainer } from "./style";

import noImg from "../../assets/images/noUser.webp";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>Jaloliddin Bosimov</ProfileContainer.Name>
        <ProfileContainer.Email>
          bosimovjaloliddin@gmail.com
        </ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
