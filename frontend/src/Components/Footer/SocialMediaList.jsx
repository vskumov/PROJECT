import SocialMedia from "./SocialMedia";

function SocialMediaList() {
  const listOfSocialMedia = [
    {
      name: "whatsapp",
      title: "WhatsApp",
      url: "https://whatsapp.com/",
    },
    {
      name: "instagram",
      title: "Instagram",
      url: "https://instagram.com/",
    },
  ];

  return (
    <div className="sm-list">
      {listOfSocialMedia.map((sociaMedia) => (
        <SocialMedia {...sociaMedia} key={sociaMedia.name} />
      ))}
    </div>
  );
}

export default SocialMediaList;
