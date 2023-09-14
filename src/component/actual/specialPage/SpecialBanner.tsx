import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import banner from '/public/images/special/banner.png'
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

export function SpecialBanner({ setShowModal }: Numbers) {

    function showModal(event) {
        event.preventDefault()
        setShowModal(true)
    }

    function createData(
        name: string,
        T0: string,
        T0_1: string,
        T0_2: string,
        T0_3: string,
        T0_4: string,
        year_3: string,
        year_5: string,
    ) {
        return { name, T0, T0_1, T0_2, T0_3, T0_4, year_3, year_5 };
    }

    const rows = [
        createData('ММС', '-', '10/5', '15/5', '15/10', '30%', '30/10', '1500/20'),
        createData('Chevrolet', '-', '10/5', '15/5', '15/10', '30%', '30/10', '1100/20'),
        createData('Datsun', '-', '1300 руб', '1300 руб', '1300 руб', '1300 руб', '', ''),
        createData('Suzuki', '-', '10/5', '15/5', '15/10', '30%', '30/10', '1300/20'),
        createData('Chevrolet Niva', '-', '', '', '', '', '', ''),
        createData('GM, Ford', '-', '10/5', '15/5', '15/10', '', '30/10', '1200/20'),
        createData('УАЗ', '-', '10/5', '15/5', '15/10', '', '30/10', '1000/20'),
        createData('Hyundai', '-', '10/5', '15/5', '15/10', '', '30/10', '1500/20'),
        createData('Nissan', '-', '10/5', '15/5', '15/10', '', '30/10', '1500/20'),
        createData('Subaru', '-', '10/5', '15/5', '15/10', '', '30/10', '1500/20'),
        createData('Chery', '-', '10/5', '15/5', '15/10', '', '30/10', '1100/20'),
        createData('Jaguar Land Rover', '-', '10/5', '15/5', '15/10', '', '2000 руб./15', '1500/20'),
        createData('Renault', '-', '10/5', '15/5', '15/10', '', '30/10', '1200/20'),
        createData('Volkswagen', '-', '10/5', '15/5', '15/10', '', '30/10', '1400/20'),
        createData('VW Polo', '-', '10/5', '15/5', '15/10', '', '30/10', '1250/20'),
        createData('Volvo', '-', '', '', '', '', '', ''),
        createData('Kia', '-', '10/5', '15/5', '15/10', '', '30/10', '1100/20'),
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
                    <p className="title">Дисконтная программа Арконт Special</p>
                </div>
                <div className="banner"></div>
                <div className="txt">
                    <div className='column' id="desktop">
                        <div className='columnTitle'>Условия единой программы лояльности Special* по брендам</div>
                        <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    <TableRow >
                                        <TableCell >Бренд</TableCell>
                                        <TableCell align="right">ТО</TableCell>
                                        <TableCell align="right">ТО-1</TableCell>
                                        <TableCell align="right">ТО-2</TableCell>
                                        <TableCell align="right">ТО-3</TableCell>
                                        <TableCell align="right">ТО-4  и более</TableCell>
                                        <TableCell align="right">3 года и старше</TableCell>
                                        <TableCell align="right">5 лет и старше</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row"
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'   

                                                }}
                                                align="right">{row.T0}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'
                                                }}
                                                align="right">{row.T0_1}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'
                                                }}
                                                align="right">{row.T0_2}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'
                                                }}
                                                align="right">{row.T0_3}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'
                                                }}
                                                align="right">{row.T0_4}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'
                                                }}
                                                align="right">{row.year_3}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    fontSize: '16px',fontFamily: 'Gilroy'
                                                }}
                                                align="right">{row.year_5}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>


                    <p className="titleMini" >
                        <ul> *Особенности программы лояльности SPECIAL:
                            <li className='liBottom'>
                                Карта SPECIAL привязана к автомобилю клиента и действует во всех дилерских центрах компании АРКОНТ. При смене авто текущим владельцем (изменении VIN) либо при продаже авто другому владельцу исчисление условия программы начинается заново. Мы стремимся сделать владение Вашим автомобилем максимально комфортным и предоставляем Вам возможность выбора.
                            </li>
                            <li className='liBottom'>
                                Сложение условий программы с иными картами и сервисными акциями не допускается. В этом случае применяется только одно наиболее выгодное предложение. Вы вправе выбрать то, что Вам больше нравится или подходит.
                            </li>
                            <li className='liBottom'>
                                Условия программы действуют в случае покупки запасных частей в компании АРКОНТ. В случае предоставления клиентом своих запчастей скидка отдельно к стоимости нормо-часа не применяется. Просим отнестись с пониманием, мы действительно отвечаем за качество выполняемых работ и запасных частей и материалов, используемых в ходе ремонта Вашего автомобиля.
                            </li>
                            <li className='liBottom'>
                                Обязательным условием выдачи карты является получение от клиента адреса электронной почты. Нам важно оставаться с Вами на связи и иметь возможность сделать Вам интересное предложение без излишней назойливости, по электронной почте.
                            </li>
                            <li className='liBottom'>
                                Скидки по программе не применяются к мойке, промо- и иным работам с пониженной стоимостью нормо-часа (например, доступный сервис), работам подразделений ЦКР.
                            </li>
                            <li className='liBottom'>
                                В условиях программы приоритет имеет возраст автомобиля.
                            </li>
                            <li className='liBottom'>
                                Из подсчета количества пройденных ТО при начислении скидки исключается ТО-0.
                            </li>
                        </ul>
                    </p>
                    <div className='column'>
                        <Button
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                width: '100%',
                                height: '45px',
                                backgroundColor:' #131313',
                                borderRadius:'10px'

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
                    text-align: center
                }

                .titleMini {
                    font-size: 20px;
                    text-align: center;
                }

                .banner {
                    display:flex; 
                    width: 900px;
                    height: 280px;
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
                    font-weight: bold;
                    margin-top: 10px;
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

                .liBottom {
                    display: flex;
                    justify-content: start;
                    text-align: start;
                    margin-top: 10px;
                }

  
                @media(max-width: 1000px) {
                    .banner {
                        width: 600px;
                        background-size: contain;
                    }
                    .txt {
                        width: 600px;
                    }
                }

                
                @media(max-width: 800px) {
                    .banner{
                       height: 180px;
                    }
                    .title {
                        font-size: 30px;
                    }
                }
                
                @media(max-width: 620px) {
                    .titleMini {
                        font-size: 20px;
                    }

                    .title {
                        font-size: 25px;
                    }
                    .txt {
                        width: 400px;
                    }
                    li {
                        font-size: 16px;
                    }

                }

                @media(max-width: 500px) {
                    .banner {
                        height: 100px;
                        width: 200px;
                        background-size: contain;
                    }
                    .title {
                        font-size: 20px;
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
                       
                        background-size: contain;
                    }
                    .titleMini{
                         font-size: 16px;
                    }
                    .txt {
                        width: 200px;
                    }
                }
            `}</style>
        </>
    )
}