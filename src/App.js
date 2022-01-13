import Section from './components/section';
import Container from './components/container';
import Title from './components/title';
import Form from './components/form';
import Filter from './components/filter';
import Contacts from './components/contacts';

export default function App() {
  return (
    <>
      <Form />
      <Section>
        <Container>
          <Title title="Contacts" />
          <Filter />
          <Contacts />
        </Container>
      </Section>
    </>
  );
}
