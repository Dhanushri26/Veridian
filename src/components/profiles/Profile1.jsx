import "./ProfileCard.css";
import profile1 from "../../assets/image 5.png";

const Profile1 = () => {
  const data = {
    id: 1,
    description:
      "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.                                       ",
    profile: profile1,
    name: "Julian Jarvis",
    role: "Chairman, Founder and CEO",
  };

  return (
    <div className="profile-card">
      <div className="content-wrapper">
        <div className="profile-image">
          <img src={data.profile} alt={data.name} />
        </div>
        <div className="text-content">
          <p className="description">{data.description}</p>
          <div className="name-tag">
            <div className="tagg2"></div>
            <p className="name">{data.name}</p>
            <p className="role">{data.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
