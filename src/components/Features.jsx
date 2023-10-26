import Card from "./Card";

const cardData = [
    {
        heading: 'Easy to use',
        imgSource: 'surprise',
    },
    {
        heading: 'Simple syntax',
        imgSource: 'wink',
    },
    {
        heading: 'Fast',
        imgSource: 'heart',
    },
]

export default function Features() {
    return (
        <div className="features">
            {cardData.map((card, index) => (
                <Card key={index} heading={card.heading} imgSource={card.imgSource} />
            ))}
        </div>
    );  
}