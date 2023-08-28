import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import banner from '/public/images/tires/service.jpg'
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import { experimentalStyled as styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



type Numbers = {
    setShowModal: Dispatch<SetStateAction<boolean>>,
}

export function TiresServiceBanner({ setShowModal }: Numbers) {

    function showModal(event) {
        event.preventDefault()
        setShowModal(true)
    }

    function createData(
        name: string,
        R14: number,
        R16: number,
        R18: number,
        R20: number,
    ) {
        return { name, R14, R16, R18, R20 };
    }

    const rows = [
        createData('Легковые', 2180, 2540, 2780, 2780),
        createData('Кроссоверы', 2180, 2540, 2780, 3140),
    ];


    function createDataTwo(
        name: string,
        price: number,
    ) {
        return { name, price };
    }

    const rows2 = [
        createDataTwo('Легковые (с балансировкой)', 1700),
        createDataTwo('Кроссоверы (с балансировкой)', 1940),
        createDataTwo('Все авто (без балансировки)	', 980),
    ];


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <div className="background">
                <div className="txt">
                    <p className="title">Сезонный шиномонтаж</p>
                </div>
                <div className="banner"></div>
                <div className="txt">
                    <div className='column'>
                        <p className="titleMini">
                            Пройдите шиномонтаж на выгодных условиях в официальном сервисном центре Арконт
                        </p>
                    </div>
                    <div className='column' id="desktop">
                        <div className='columnTitle'>Прайс-лист комплексного шиномонтажа 4-х колес (руб.)</div>
                        <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    <TableRow >
                                        <TableCell >Тип авто</TableCell>
                                        <TableCell align="right">R14-R15</TableCell>
                                        <TableCell align="right">R16-R17</TableCell>
                                        <TableCell align="right">R18-R19</TableCell>
                                        <TableCell align="right">R20+</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.R14}</TableCell>
                                            <TableCell align="right">{row.R16}</TableCell>
                                            <TableCell align="right">{row.R18}</TableCell>
                                            <TableCell align="right">{row.R20}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='column' id="desktop">
                        <div className='columnTitle'>Прайс-лист замены 4-х колес в сборе (руб.)</div>
                        <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    <TableRow>
                                        <TableCell>Тип авто</TableCell>
                                        <TableCell align="right">Цена(руб.)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    {rows2.map((rows2) => (
                                        <TableRow
                                            key={rows2.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {rows2.name}
                                            </TableCell>
                                            <TableCell align="right">{rows2.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className='column' id="mobile">
                        <Accordion sx={{ marginTop: '20px', width: '100%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white'}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ color: 'white',backgroundColor:'#0c54a0' }}
                            >
                                <Typography>Прайс-лист на R14-R15</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        <li>Легковые - 2180</li>
                                        <li>Кроссоверы - 2180</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='column' id="mobile">
                        <Accordion sx={{ marginTop: '20px', width: '100%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ backgroundColor:'#0c54a0', color: 'white' }}
                            >
                                <Typography>Прайс-лист на R16-R17</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        <li>Легковые - 2540</li>
                                        <li>Кроссоверы - 2540</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='column' id="mobile">
                        <Accordion sx={{ marginTop: '20px', width: '100%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ backgroundColor:'#0c54a0', color: 'white' }}
                            >
                                <Typography>Прайс-лист на R18-R19</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        <li>Легковые - 2780</li>
                                        <li>Кроссоверы - 2780</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className='column' id="mobile">
                        <Accordion sx={{ marginTop: '20px', width: '100%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ backgroundColor:'#0c54a0', color: 'white' }}
                            >
                                <Typography>Прайс-лист на R20+</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        <li>Легковые - 2780</li>
                                        <li>Кроссоверы - 3140</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <p className="titleMini">
                        Стоимость услуги распространяется на бренды: KIA, Renault, Volkswagen, Mitsubishi,
                        Nissan, Hyundai, Suzuki, GM, Ford, УАЗ, Opel, Jeep.
                    </p>
                    <div className='column'>
                        <Button
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                width: '100%',
                                height: '40px',
                                backgroundColor:'#0c54a0',
                                borderRadius:'0px'
                            }}
                            variant="contained"
                            onClick={showModal}
                        >Узнать больше</Button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                
                .background {
                    display:flex; 
                    height: auto;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;
                }

                .title  {
                    font-size: 45px;
                    font-weight: bold;
                    text-align: center;
                    font-family: 'Roboto','sans-serif'; 

                }

                .titleMini {
                    font-size: 20px;
                    text-align: center;
                    font-family: 'Roboto','sans-serif'; 

                }

                .banner {
                    display:flex; 
                    width: 900px;
                    height: 500px;
                    justify-content: center;
                    background-position: center center;
                    background-image: url('${banner.src}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    padding-top: 42px;
                }

                .txt{
                    display:flex; 
                    align-items: start;
                    width: 900px;
                    height: auto;
                    flex-direction: column;

                }
                
                .columnTitle{
                    display:flex; 
                    width: 100%;
                    justify-content: center;
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                    margin-top: 10px;
                    font-family: 'Roboto','sans-serif'; 

                }

                .column{
                    display:flex; 
                    flex-direction: column;
                    align-items: start;
                    width: 100%;
                    margin-top: 20px;
                }
                
                #mobile{
                    display: none;
                }

                ul{
                    list-style: none;
                }

                @media(max-width: 1000px) {
                    .banner {
                        height: 300px;
                        width: 600px;
                    }
                    .txt {
                        width: 600px;
                    }
                }

                @media(max-width: 800px) {
                    #desktop {
                        display:none;
                    }
                    #mobile{
                       display: flex;
                       align-items: center;
                       width: 100%;
                    }
                }


                
                @media(max-width: 620px) {
                    .banner {
                        height: 200px;
                        width: 400px;
                    }
                    .title {
                        font-size: 35px;
                    }
                    .txt {
                        width: 400px;
                    }
                    li {
                        font-size: 16px;
                    }
                    .titleMini{
                         font-size: 17px;
                    }
                }

                @media(max-width: 500px) {
                    .banner {
                        height: 100px;
                        width: 200px;
                    }
                    .title {
                        font-size: 25px;
                    }
                    .txt {
                        width: 300px;
                    }
                    li {
                        font-size: 14px;
                    }
                }

                @media(max-width: 350px) {
                    .banner {
                        height: 200px;
                        background-size: contain;
                    }
                    .titleMini{
                         font-size: 15px;
                    }
                    .txt {
                        width: 200px;
                    }
                }
            `}</style>
        </>
    )
}