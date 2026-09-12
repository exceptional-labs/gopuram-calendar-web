import "./globals.css";

export const metadata = {
  title: "Gopuram Calendar",
  description:
    "Gopuram Calendar – உங்கள் தினசரி தமிழ் காலண்டர். தமிழ் தேதி, தினசரி ராசிபலன், நல்ல நேரம், கௌரி நல்ல நேரம், இராகு காலம், எமகண்டம், குளிகை, பஞ்சாங்கம், விரத நாட்கள், சுப முகூர்த்த நாட்கள் மற்றும் ஆன்மிக தகவல்களை அறிந்து கொள்ளுங்கள்.",
  keywords: [
    "Gopuram Calendar",
    "Gopuram Tamil Calendar",
    "Tamil Calendar",
    "Tamil Calendar 2026",
    "தமிழ் காலண்டர்",
    "தமிழ் காலண்டர் 2026",
    "இன்றைய தமிழ் தேதி",
    "நல்ல நேரம்",
    "கௌரி நல்ல நேரம்",
    "ராகு காலம்",
    "எமகண்டம்",
    "குளிகை",
    "பஞ்சாங்கம்",
    "தினசரி ராசிபலன்",
    "ராசிபலன்",
    "விரத நாட்கள்",
    "சுப முகூர்த்த நாட்கள்",
    "ஆன்மிக தகவல்கள்",
    "Tamil Panchangam",
    "Tamil Rasi Palan",
    "Tamil Devotional Calendar",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Gopuram Calendar" }],
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta">
      <head>
        <link
          rel="stylesheet"
          href="/assets/css/vendor/bootstrap.min.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/vendor/slick.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/vendor/slick-theme.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/vendor/aos.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/feature.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/style.css"
        />
      </head>

      <body
        className="template-color-1 spybody white-version"
        data-spy="scroll"
        data-bs-target=".navbar-example2"
        data-offset="150"
      >
        {children}
      </body>
    </html>
  );
}