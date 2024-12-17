import "./ProfileCard.css";
import profile2 from "../../assets/Peter Montegriffo KC Photo 2021 A High Res 1.png";

const Profile2 = () => {
  const data = {
    id: 2,
    description:
      "Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally.Peter has worked on a number of public listings on the London Stock Exchange.  He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.",
    profile: profile2,
    name: "Peter Montegriffo KC",
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

export default Profile2;
