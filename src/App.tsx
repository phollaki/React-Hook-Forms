import styled from 'styled-components'
import BasicWithoutRHF from './forms/WithoutRHF';
import Basic from './forms/Basic';
import './index.css';
import Validated from './forms/Validated';
import ExistingComponents from './forms/ExistingComponents';
import ExternalLibrary from './forms/ExternalComponentLibrary';
import ControllerWithHook from './forms/ControllerWithHook';
import SubmissionHandling from './forms/SubmissionHandling';
import Yup from './forms/Yup';
import Zod from './forms/Zod';

const Section = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
const SectionTitle = styled.h2`
  color: white;
  font-size: 20px;
`

const ExampleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Line = styled.hr`
  height: 2px;
  background-color: #ccc;
`

function App() {
  return (
    <div className="App">
      <Section>
        <SectionTitle>Basic</SectionTitle>
        <ExampleRow>
          <Basic />
          <BasicWithoutRHF />
        </ExampleRow>
      </Section>

      <Line />

      <Section>
        <SectionTitle>Validation</SectionTitle>
        <Validated />
      </Section>

      <Line/>

      <Section>
        <SectionTitle>Integrating with existing components</SectionTitle>
        <ExistingComponents />
      </Section>

      <Line/>

      <Section>
        <SectionTitle>Integrating with external UI library</SectionTitle>
        <ExternalLibrary />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Controller with Hook API</SectionTitle>
        <ControllerWithHook />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Submission Handling</SectionTitle>
        <SubmissionHandling />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Validating with Yup</SectionTitle>
        <Yup />
      </Section>

      <Line />

      <Section>
        <SectionTitle>Validating with Zod</SectionTitle>
        <Zod />
      </Section>
    </div>
  );
}

export default App;
