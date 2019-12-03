import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BarWrapper = styled.div`
  height: 30px !important;
  margin-bottom: 25px;
`;

const Bar = styled.div`
  width: ${({ progress }) => progress}%;
  padding-left: 30px;
  padding-right: 30px;
`;

const ProgressBar = ({ total, current }) => {
  const progress = Math.ceil((current * 100) / total);

  return (
    <BarWrapper className='progress'>
      <Bar className='progress-bar progress-bar-striped' progress={progress} />
    </BarWrapper>
  );
};

ProgressBar.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default ProgressBar;
