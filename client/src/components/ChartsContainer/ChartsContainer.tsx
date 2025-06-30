import Wrapper from './Wrapper';
import ChartBar from '../ChartBar';
import ChartArea from '../ChartArea';

interface ChartsContainerProps {
  data: { date: string; count: number }[];
}

const ChartsContainer = ({ data }: ChartsContainerProps) => {
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <ChartBar data={data} />
      <ChartArea data={data} />
    </Wrapper>
  );
};

export default ChartsContainer;
