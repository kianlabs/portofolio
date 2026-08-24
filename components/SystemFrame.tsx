import SystemHeader from "./SystemHeader";
import MenuBar from "./MenuBar";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import NoiseOverlay from "./NoiseOverlay";
import CommandPalette from "./CommandPalette";
import BootSequence from "./BootSequence";
import EasterEgg from "./EasterEgg";
import Screensaver from "./Screensaver";

export default function SystemFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoiseOverlay />
      <BootSequence />
      <CommandPalette />
      <EasterEgg />
      <Screensaver />
      <div className="system-frame">
        <SystemHeader />
        <MenuBar />
        <Navigation />
        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
          <Sidebar />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
            <TabBar />
            <main style={{ flex: 1, overflowY: "auto", backgroundColor: "var(--bg-main)" }} id="main-content">
              {children}
            </main>
          </div>
        </div>
        <StatusBar />
      </div>
    </>
  );
}
