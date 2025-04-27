export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header></header>
          {children}
          <footer></footer>
        </body>
      </html>
    );
  }
  