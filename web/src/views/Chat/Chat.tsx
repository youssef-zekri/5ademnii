import Menu from "../../components/Menu/Menu";
import Job from "./components/Job/Job";
import SearchJob from "./components/SearchForJob/SearchJob";

export default function Chat() {
  return (
    <div className="Chat">
      <Menu/>
      <div className="Chat__offers">
        <SearchJob />
      <Job />
      </div>
    </div>
  );
}
