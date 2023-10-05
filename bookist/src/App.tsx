import './App.css';
import { SummaryTableComponent } from "./components/summary-table/summary-table-component";
import { SpaceBetween, BreadcrumbGroup } from '@cloudscape-design/components';

let currentState: string = 'Summary view';

function App() {
  return (
    <div className="container">
      <SpaceBetween direction="vertical" size="l">
        <BreadcrumbGroup
          items={[
            {
              text: "Home",
              href: "#"
            },
            {
              text: currentState,
              href: "#components/breadcrumb-group"
            }
          ]}
        />
        <SummaryTableComponent eventContext="test" />
      </SpaceBetween>
    </div >
  );
}

export default App;