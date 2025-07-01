import Wrapper from './Wrapper';
import { useAllJobsContext } from '../../pages/AllJobs';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const PageBtnContainer = () => {
  const {
    data: { numberOfPages, currentPage },
  } = useAllJobsContext();

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const handlePrevClick = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageChange(currentPage + 1);
  };

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', page);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass ? 'active' : ''}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: currentPage === 1 }));

    if (currentPage > 3) {
      pageButtons.push(addDots(1));
    }

    if (currentPage > 2) {
      pageButtons.push(addPageButton({ pageNumber: currentPage - 1, activeClass: false }));
    }

    if (currentPage !== 1 && currentPage !== numberOfPages) {
      pageButtons.push(addPageButton({ pageNumber: currentPage, activeClass: true }));
    }

    if (currentPage < numberOfPages - 1) {
      pageButtons.push(addPageButton({ pageNumber: currentPage + 1, activeClass: false }));
    }

    if (currentPage < numberOfPages - 2) {
      pageButtons.push(addDots(2));
    }

    pageButtons.push(addPageButton({ pageNumber: numberOfPages, activeClass: currentPage === numberOfPages }));

    return pageButtons;
  };

  const addDots = (index) => {
    return (
      <span className="page-btn dots" key={`dots-${index}`}>
        ...
      </span>
    );
  };

  return (
    <Wrapper>
      <button className="btn prev-btn" onClick={handlePrevClick} disabled={currentPage === 1}>
        <HiChevronDoubleLeft /> prev
      </button>
      <div className="btn-container">{renderPageButtons()}</div>
      <button className="btn next-btn" onClick={handleNextClick} disabled={currentPage === pages.length}>
        next <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
