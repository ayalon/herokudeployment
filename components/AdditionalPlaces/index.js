import react from 'react';
import { useRouter } from 'next/router'

function CardComponent({ url, text, id }) {
    return (
        <div className="col-6 col-md-4 col-lg-2">
            <a href={`/discover-single/${id}`}>
                <div className="card-dummy__bg">
                    <img src={url} />
                    <div className="card-title">
                        <h5><font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>
                                {text}
                            </font></font>
                        </h5>
                    </div>
                </div>
            </a>
        </div>                
    )
};

export default function AdditionalPlaces ({ imagesList = [] }) {
    console.log("imagesList", imagesList);
    return (
        <div className="other-places">
            <div className="container">
                <div className="title-center">
                    <div className="title-section text-center">
                        <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            Visit every corner of our lake.
                            </font></font></h3>
                        <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            It is the only one, among the pre-Alpine ones, which expands in the high plain, changing its appearance: from a physiognomy of a valley lake, with the characteristics of a real fjord, similar to the other subalpine lakes, to that of a small plain sea. </font><font style={{verticalAlign: 'inherit'}}>Those who come from northern Europe along the Lagarina valley, arrive in Torbole and Riva del Garda and have the feeling of being in front of a landscape very similar to a Nordic fjord, dominated on the eastern side by Monte Baldo.
                        </font></font></p>
                    </div>
                </div>
                <div className="other-places-grid">
                    <div className="row">
                        {
                            imagesList.map(({ url, nome, id }) => (
                                <CardComponent url={url} text={nome} id={id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
