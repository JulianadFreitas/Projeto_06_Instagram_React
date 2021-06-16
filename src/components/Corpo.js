import LadoEsquerdo from "./LadoEsquerdo";
import Sidebar from "./Sidebar";

export default function Corpo() {
  return (
    <div className="corpo">
      <LadoEsquerdo />
      <Sidebar />
    </div>
  );
}
