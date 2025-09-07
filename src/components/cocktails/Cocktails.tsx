import Stack from "@mui/material/Stack";
import "./cocktails.css";

const cocktails = [
  {
    name: "Daquiry",
    description: ["קוקטייל לימוני מרענן במגוון טעמים", "שאל את הברמן"],
  },
  {
    name: "Gin & Tonic",
    description: ["רענן ותוסס עם נגיעות מלפפון, אי אפשר לטעות עם קלאסיקה."],
  },
  {
    name: "Negroni",
    description: [
      "בעל ניחוח עוצמתי ונוכחות, הנגרוני משלב טעם אלכוהולי קלאסי עם החמצמצות של האשכולית.",
    ],
  },
  {
    name: "Margarita / Frozen Margarita",
    description: [
      "משקה הדגל של החופ״ליה המשלב את הטעמים החזקים של הטאקילה ומיצי פירות ההדר השונים.",
      "עכשיו גם בגרסת ברד מרעננת.",
    ],
  },
  {
    name: "Midori Sour",
    description: ["משקה אקזוטי בטעמי מלון חמצמץ משולב עם הקופצניות של הסודה."],
  },
  {
    name: "Whiskey Sour",
    description: [
      "משקה ג׳נטלמני, עצמתי ועדין כאחד,",
      "עם טוויסט של חלבון מוקצף.",
    ],
  },
  {
    name: "White Russian",
    description: [
      "המשקה הוותיק המשלב את הטעמים המוכרים של הקפה והאלכוהול עם תוספת של אייריש קרים תוצרת בית.",
    ],
  },
  {
    name: "Red Beard",
    description: [
      "משקה שלא מתפשר בין הטעם והעוצמה, משלב חמוציות ומנת אלכוהול ברוחב לב.",
    ],
  },
  {
    name: "Sex On The Beach",
    description: [
      "המשקה המוצלח והמוכר נוחת בחופ״ליה ונותן טוויסט מרענן של אפרסק מתקתק.",
      "תיזהרו שלא ליפול מהכיסא!",
    ],
  },
];

const Cocktails = () => {
  return (
    <Stack className="cocktails">
      <Stack gap="2rem">
        {cocktails.map(({ name, description }) => (
          <CocktailItem key={name} name={name} description={description} />
        ))}
      </Stack>
    </Stack>
  );
};

const CocktailItem = (props: { name: string; description: string[] }) => {
  const { name, description } = props;

  return (
    <Stack className="cocktail-item">
      <p className="name">{name}</p>
      <div className="description">
        {description.map((s) => (
          <p>{s}</p>
        ))}
      </div>
    </Stack>
  );
};

export default Cocktails;
