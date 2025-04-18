const BannerCard = ({ imgSrc, text }) => (
    <div className="relative w-72 h-40 flex-shrink-0">
      <img src={imgSrc} alt="Banner" className="w-full h-full object-cover rounded-lg" />
      <div className="absolute bottom-2 left-2 text-white font-bold">{text}</div>
    </div>
  );
  
  export default BannerCard;
  