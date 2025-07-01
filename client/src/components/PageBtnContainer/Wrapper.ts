import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    background-color: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }

  .page-btn {
    background-color: transparent;
    border-color: transparent;
    width: 3rem;
    height: 2.5rem;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;
    padding: 0;
  }

  .active {
    background-color: var(--primary-500);
    color: var(--white);
  }

  .prev-btn,
  .next-btn {
    background-color: var(--background-secondary-color);
    border-color: transparent;
    width: 6.25rem;
    height: 2.5rem;
    border-radius: var(--border-radius);
    color: var(--primary-500);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-500);
      color: var(--white);
      transition: var(--transition);
    }
  }

  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;

export default Wrapper;
