export const metadata = {
  title: "Chico 下班时间计算器",
  description: "和 Chico 一起计算今天的下班时间"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
