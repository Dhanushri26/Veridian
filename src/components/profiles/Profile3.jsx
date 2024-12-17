import "./ProfileCard.css";
import profile3 from "../../assets/Grahame_Jackson_24 1.png";
const Profile3 = () => {
  const data = {
    id: 3,
    description:
      "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation.He has written  British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
    profile: profile3,
    name: "Grahame Jackson",
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
            <p className="name">{data.name}</p>
            <p className="role">{data.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile3;
