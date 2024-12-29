

export default function MenuPage() {
  return (
    <div>
      <div className='topMenu'>
                <div className='proteins'>
                    <h2>Proteins</h2>
                    <div className='protein'>
                        <p>Carne, </p>
                        <p>Asada,</p>
                        <p>Chorizo,</p>
                        <p>Pollo,</p>
                        <p>Pastor,</p>
                        <p>Cabeza</p>
                    </div>
                </div>
                <div className='drinks'>
                    <h2>Drinks</h2>
                    <div className='drink'>
                        <p>Water,</p>
                        <p>Cocacola,</p>
                        <p>Jarritos</p>
                    </div>
                </div>
            </div>
            <div className='foodOptions'>
                <h2>Entrees</h2>
                <div className='entreeBox'>
                    <div className='tacos'>
                        <h3>Tacos</h3>
                        <div className="entreeContent">
                            <p>Experience a burst of authentic flavors with our tacos, crafted with your choice of succulent meat, fresh cilantro, and finely chopped onions. A true classic that brings the taste of Mexico right to your plate.</p>
                        </div>
                    </div>
                    <div className='tortas'>
                        <h3>Tortas</h3>
                        <div className="entreeContent">
                            <p>Enjoy our mouthwatering Torta, featuring melted mozzarella cheese, refried beans, crisp lettuce, fresh onion, and your choice of tender meat, all served on a soft, freshly baked telera bread. A deliciously satisfying bite with every taste!</p>
                        </div>
                    </div>
                    <div className='burritos'>
                        <h3>Burritos</h3>
                        <div className="entreeContent">
                            <p>Dive into our hearty burrito, filled with seasoned rice, slow-cooked beans, melted Monterrey cheese, and a sprinkle of cilantro and onion. Choose your favorite meat to complete this delicious handheld meal.</p>
                        </div>
                    </div>
                    <div className='quesadillas'>
                        <h3>Quesadillas</h3>
                        <div className="entreeContent">
                            <p>Savor our quesadillas, where warm, gooey Monterrey cheese meets fresh cilantro, onion, and your choice of savory meat, grilled to perfection for a comforting, cheesy delight.</p>
                        </div>
                    </div>
                    <div className='quesabirrias'>
                        <h3>Quesabirrias(weekend special)</h3>
                        <div className="entreeContent">
                            <p>Taste our Quesa Birrias, a delightful blend of melted mozzarella cheese, fresh cilantro, and onions, paired with tender, juicy birria for an unforgettable fusion of flavors.</p>
                        </div>
                    </div>
                 </div>   
            </div>
    </div>
  );
}
