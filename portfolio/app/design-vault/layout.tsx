export default function DesignVaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#f5f4f0", minHeight: "100vh", color: "#1a1a1a", cursor: "auto" }}>
      {children}
    </div>
  );
}