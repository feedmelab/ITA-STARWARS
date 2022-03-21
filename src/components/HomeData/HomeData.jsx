/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from 'react-bootstrap';
import FlipFlashed from '../FlipFlashed/FlipFlashed';
import { HomeData } from './HomeData.styles';

export default () => (
  <HomeData>
    <Row>
      <Col>
      <FlipFlashed />
      </Col>
    </Row>
  </HomeData>
);
