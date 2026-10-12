const categories = [
  "All",
  "Music",
  "Mixes",
  "The Pit",
  "Russian Pop",
  "Indie pop music",
  "Turkish Pop Music",
  "Electropop",
  "Text",
  "Cem Adrian",
  "Live",
  "Reverberation",
  "Contemporary R&B",
  "Gaming",
  "Türkü",
  "Arabic Music",
  "Latin Pop",
  "Pop Music",
];

export default function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`category ${
            index === 0 ? "selected" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
