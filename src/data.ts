export const navLinks: { name: string; path: string }[] = [
  {
    name: "שירותים",
    path: "/שירותים/"
  },
  {
    name: "אודות",
    path: "/אודות/"
  },
  {
    name: "למה אנחנו?",
    path: "/למה-אנחנו/"
  }
];

export const features: {
  color: string;
  icon: string;
  line1: string;
  line2: string;
}[] = [
  {
    color: "bg-red-100",
    icon: "mdi:account-sync-outline",
    line1: "טיפול שוטף",
    line2: "במשאבי האנוש"
  },
  {
    color: "bg-yellow-100",
    icon: "mdi:account-group-outline",
    line1: "גיוס",
    line2: "עובדים ומנהלים"
  },
  {
    color: "bg-green-100",
    icon: "mdi:cash-multiple",
    line1: "ניהול",
    line2: "מערך השכר"
  },
  {
    color: "bg-purple-100",
    icon: "mdi:clock-time-eight-outline",
    line1: "טיפול",
    line2: "במערך הנוכחות"
  },
  {
    color: "bg-teal-100",
    icon: "mdi:chart-line",
    line1: "תמיכה",
    line2: "במהלכי שינוי"
  },
  {
    color: "bg-lime-100",
    icon: "mdi:account-supervisor-outline",
    line1: "ליווי והכשרה",
    line2: "של מנהלים"
  }
];

export const serviceDisplay: { heading: string; paragraph: string }[] = [
  {
    heading: "טיפול שוטף בתחום משאבי האנוש",
    paragraph: "טיפול בהתנהלות הארגונית מול כל עובד בכל מחזור החיים שלו בארגון"
  },
  {
    heading: "גיוס עובדים ומנהלים",
    paragraph: "ליווי תהליך הגיוס והקליטה של עובדים ומנהלים בארגון"
  },
  {
    heading: "ניהול מערך השכר והנוכחות בארגון",
    paragraph:
      "סל שירותים מקיף הכולל הקמה, שדרוג וניהול מערך השכר הארגוני ומערך נוכחות ממחושבת"
  },
  {
    heading: "ליווי מנהלים ותמיכה במהלכי שינוי ארגוני",
    paragraph:
      "הכשרה וליווי של מנהלים בכניסה לתפקיד ובהתמודדות עם אתגרי שינוי ארגוני (צמיחה, רה-ארגון, צמצום ארגוני ועוד)"
  }
];
