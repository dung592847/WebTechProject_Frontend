<template>

<section class="section__container popular__container">
      <h2 class="section__header">Popular Flight Destinations</h2>
      <div class="popular__grid">
        <div class="popular__card">
          <img src="https://placehold.co/600x400" alt="popular flight destinations" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Generic Flight 1</h4>
              <h4>$499</h4>
            </div>
            <p>New York City, USA</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="https://placehold.co/600x400" alt="popular flight destinations" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Generic Flight 2</h4>
              <h4>$549</h4>
            </div>
            <p>Paris, France</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="https://placehold.co/600x400" alt="popular flight destinations" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>The Peninsula</h4>
              <h4>$599</h4>
            </div>
            <p>Generic Flight 3</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="https://placehold.co/600x400" alt="popular flight destinations" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Generic Flight 4</h4>
              <h4>$449</h4>
            </div>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
        <div class="popular__card">
          <img src="https://placehold.co/600x400" alt="popular flight destinations" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Generic Flight 5</h4>
              <h4>$649</h4>
            </div>
            <p>Tokyo, Japan</p>
          </div>
        </div>
        <div class="popular__card">
           <img src="https://placehold.co/600x400" alt="popular flight destinations" />
          <div class="popular__content">
            <div class="popular__card__header">
              <h4>Generic Flight 6</h4>
              <h4>$549</h4>
            </div>
            <p>Singapore</p>
          </div>
        </div>
      </div>
    </section>

</template>


<style scoped>



.popular__grid {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.popular__card {
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.popular__content {
  padding: 2rem;
}

.popular__card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.popular__card__header h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.popular__content p {
  color: var(--text-light);
}
</style>