import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }

  /* TIMELINE */
.timeline {
  position: relative;
  padding: 4rem 0;
  margin: 4rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #23ce6b;
    transform: translateX(-50%);
  }

  .timeline-item {
    position: relative;
    width: 45%;
    padding: 2rem;
    background: #2b2b2b;
    color: white;
    border-radius: 1rem;
    margin: 2rem 0;

    ul {
      padding-left: 1.2rem;

      li {
        margin-bottom: 0.6rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 15px;
      height: 15px;
      background-color: #23ce6b;
      border-radius: 50%;
      z-index: 1;
    }

    &.left {
      left: 0;
      transform: translateX(-5%);
    }

    &.right {
      left: 55%;
      transform: translateX(5%);
    }
  }
}

/* PROJETS */
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;

  .project {
    padding: 2rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    color: white;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

      .project-links {
        display: flex;
        gap: 1rem;
      }

      a > img {
        width: 2rem;
      }
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        opacity: 0.7;
      }
    }
  }
}

/* CAPTURES AR ZOO */
.captures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  h1 {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 2rem;
  }

  .capturesline {
    padding: 2rem;
    background: #2b2b2b;
    color: white;
    border-radius: 1rem;

    ul {
      padding-left: 1.2rem;

      li {
        margin-bottom: 0.6rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
  }

  .captures-images {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;

    img {
      max-width: 100%;
      flex: 1 1 300px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 960px) {
  .timeline::before {
    left: 10px;
  }

  .timeline-item {
    width: 90% !important;
    left: 0 !important;
    transform: none !important;
    margin-left: 2.5rem;

    &::after {
      left: -25px !important;
    }
  }

  .projects {
    grid-template-columns: repeat(2, 1fr);
  }

  .captures {
    grid-template-columns: 1fr;
  }

  .capturesline {
    width: 100% !important;
  }
}

@media (max-width: 600px) {
  .projects {
    grid-template-columns: 1fr;
  }
}




`;
