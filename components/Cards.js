import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Cards.module.css';
import Image from "next/image";
import icon from '../public/categories.png';
import plus from '../public/add.png';
import pieChart from '../public/pie-chart.png';
import barChart from '../public/bar-graph.png';


function Cards () {


    return (
        <Container id={styles.container} > 
        <Row>
          <Col>
          <Card className={styles.cardOne}>
            <Card.Body>
            <div className={styles.containerIconz}>
            <div className={icon}>
                <Image 
                src={icon}
                alt='category icon'
                width={100}
                height={100}/>
                </div>
                <div className={styles.textOne}>
                <h5 className={styles.themes}>Themes</h5>
                <div className={styles.number}>
                    45
                </div>
                </div>
                <div className={styles.plus}>
                    <Image
                    src={plus}
                    alt='plus icon'
                    width={50}
                    height={50}
                    />
                </div>
             </div>
            </Card.Body>
            </Card>
            </Col>
          <Col>
          <Card className={styles.cardTwo}>
            <Card.Body>
            <div className={styles.containerIconz}>
            <div className={icon}>
                <Image 
                src={pieChart}
                alt='category icon'
                width={100}
                height={100}/>
                </div>
                <div className={styles.textOne}>
                <h5 className={styles.themes}>Owners</h5>
                <div className={styles.number}>
                    85
                </div>
                </div>
                <div className={styles.plus}>
                    <Image
                    src={plus}
                    alt='plus icon'
                    width={50}
                    height={50}
                    />
                </div>
             </div>
            </Card.Body>
            </Card>
            </Col>
          <Col>
          <Card className={styles.cardThree}>
            <Card.Body>
            <div className={styles.containerIconz}>
            <div className={icon}>
                <Image 
                src={barChart}
                alt='category icon'
                width={100}
                height={100}/>
                </div>
                <div className={styles.textOne}>
                <h5 className={styles.themes}>Answers</h5>
                <div className={styles.number}>
                    1450
                </div>
                </div>
             </div>
            </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    );



}







export default Cards