<template>
    
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>ArmanAir</h3>
          <p>
           ArmanAir is a Website where you can book your next vacation!
          </p>
          <p>
            With a user-friendly interface and a vast selection of hotels,
            ArmanAir aims to provide a stress-free experience for travelers
            seeking the perfect stay.
          </p>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Blog</p>
          <p>Book</p>
          <p>Contact Us</p>
        </div>
        <div class="footer__col">
          <h4>Legal</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div class="footer__col">
          <h4>Resources</h4>
          <p>Social Media</p>
          <p>Help Center</p>
          <p>Partnerships</p>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2024 ArmanAir. All rights reserved.
      </div>
    </footer>
</template>


<style scoped>


.footer {
  background-color: var(--extra-light);
}

.footer__container {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 5rem;
 
}

.footer__col h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
}

.footer__col h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.footer__col p {
  margin-bottom: 1rem;
  color: var(--text-light);
  cursor: pointer;
  transition: 0.3s;
}

.footer__col p:hover {
  color: var(--text-dark);
}

.footer__bar {
  position: relative;
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-light);
  text-align: right;
  overflow: hidden;
}

.footer__bar::before {
  position: absolute;
  content: "";
  top: 50%;
  right: 28rem;
  transform: translateY(-50%);
  width: 20rem;
  height: 2px;
  background-color: var(--text-light);
}



</style>