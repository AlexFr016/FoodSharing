import React from 'react';
import './HeaderMainPage.css';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';
import { color } from '@mui/system';

export default function HeaderMainPage(): JSX.Element {
  return (
    <section className="promo">
      <div className="container">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/99/99072.png"
            alt="logo"
            className="logoImg"
          />

          <div className="logoText">FoodSher</div>
        </div>
        <Grid container>
          <Grid item xs={6}>
            <Card
              sx={{ maxWidth: 500, maxHeight: 320 }}
              style={{
                border: 'none',
                boxShadow: 'none',
                borderRadius: '0',
                opacity: 0.5,
              }}
            >
              <CardMedia sx={{ height: 0 }} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={54}
                  // color="black"
                >
                  {/* <div style={{ textAlign: 'center', fontWeight: '800' }}>
                    {' '}
                    - О нас
                  </div> */}
                  <div style={{ fontWeight: '800', color: 'black' }}>
                    FoodSher
                  </div>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text"
                  fontWeight="900"
                >
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 17 }}>
                    Cоциальный проект, который решает задачу спасения продуктов
                    питания от мусорного полигона, куда она обычно направляется
                    после истечения срока годности.
                  </div>
                  <br />
                  <p style={{ color: 'black', textAlign: 'justify', fontSize: 17 }}>
                    Наша задача – помочь бизнесу сэкономить на издержках и
                    распределить продукты до истечения срока годности между
                    теми, кто в них нуждается.
                  </p>
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{ maxWidth: 578, maxHeight: 320 }}
              style={{
                border: 'none',
                boxShadow: 'none',
                borderRadius: '0',
                opacity: 0.5,
              }}
            >
              <CardMedia sx={{ height: 0 }} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={64}
                  textAlign="center"
                  color="warning.main"

                  // color="black"
                >
                  Ежегодно:
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text"
                  fontWeight="900"
                >
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 18 }}>
                    17.9 млн. тонн еды выбрасывается в России!
                  </div>
                  <br />
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 18 }}>
                    Ценность продуктов с истекающим сроком годности оценивается
                    в 1.6 трлн. рублей.
                  </div>
                  <br />
                  <div style={{ color: 'black', textAlign: 'justify', fontSize: 18 }}>
                    Спасение данного объема товара позволило бы прокормить 30
                    млн. человек.
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* <h1 className="title">My Book</h1> */}
        {/* <div className="simple">
          <h2 className="titleBig">Присоединяйтесь и делайте мир лучше вместе с нами!</h2>
          <div className="line" />
        </div>
        <h2 className="title">Выберите книгу с увлекательной историей</h2> */}

        {/* <div className="promoText">
          Ежедневно в России появляется более 100 новых сайтов.
          <br />
          И только наш сайт позволит Вам взять в аренду книги и насладиться
          увлекательной историей.
          <br /> В чем секрет? Просто попробуйте <span>Наш</span> сервис!
        </div> */}

        <Link to="/books" style={{ textDecoration: 'none' }}>
          <button type="button" className="promoBtn">
            Сделать мир лучше!
          </button>
        </Link>

        <div className="more">
          <div className="moreText">узнать больше</div>
          <FaArrowCircleDown
            className="moreImg"
            style={{ height: '40px', width: '50px', color: 'white' }}
          />
        </div>
      </div>
    </section>
  );
}
