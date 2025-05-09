import React from "react";

import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const Menu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Disfruta tu comida" />
      <h1 className="headtext__cormorant">Menu Cima Bar</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Desayunos</p>
        <div className="app__specialMenu_menu_items">
          {data.breakfast.map((breakfast, index) => (
            <MenuItem
              key={breakfast.title + index}
              title={breakfast.title}
              price={breakfast.price}
              tags={breakfast.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Entradas</p>
      <div className="app__specialMenu_menu_items">
        {data.entradas.map((entradas, index) => (
          <MenuItem
            key={entradas.title + index}
            title={entradas.title}
            price={entradas.price}
            tags={entradas.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Almuerzos</p>
      <div className="app__specialMenu_menu_items">
        {data.almuerzo.map((almuerzos, index) => (
          <MenuItem
            key={almuerzos.title + index}
            title={almuerzos.title}
            price={almuerzos.price}
            tags={almuerzos.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Pizzas</p>
      <div className="app__specialMenu_menu_items">
        {data.pizzas.map((pizzas, index) => (
          <MenuItem
            key={pizzas.title + index}
            title={pizzas.title}
            price={pizzas.price}
            tags={pizzas.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Postres</p>
      <div className="app__specialMenu_menu_items">
        {data.postres.map((postre, index) => (
          <MenuItem
            key={postre.title + index}
            title={postre.title}
            price={postre.price}
            tags={postre.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Promociones</p>
      <div className="app__specialMenu_menu_items">
        {data.promos.map((promo, index) => (
          <MenuItem
            key={promo.title + index}
            title={promo.title}
            price={promo.price}
            tags={promo.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Bebidas</p>
      <div className="app__specialMenu_menu_items">
        {data.bebidas.map((bebida, index) => (
          <MenuItem
            key={bebida.title + index}
            title={bebida.title}
            price={bebida.price}
            tags={bebida.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Bebidas Calientes</p>
      <div className="app__specialMenu_menu_items">
        {data.bebidasCalientes.map((caliente, index) => (
          <MenuItem
            key={caliente.title + index}
            title={caliente.title}
            price={caliente.price}
            tags={caliente.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Bebidas Refrescantes</p>
      <div className="app__specialMenu_menu_items">
        {data.bebidasRefrescantes.map((refrescante, index) => (
          <MenuItem
            key={refrescante.title + index}
            title={refrescante.title}
            price={refrescante.price}
            tags={refrescante.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Shots</p>
      <div className="app__specialMenu_menu_items">
        {data.shots.map((shot, index) => (
          <MenuItem
            key={shot.title + index}
            title={shot.title}
            price={shot.price}
            tags={shot.tags}
          />
        ))}
      </div>
    </div>
    <div className="app__specialMenu-menu_cocktails flex__center">
      <p className="app__specialMenu-menu_heading">Cocktails</p>
      <div className="app__specialMenu_menu_items">
        {data.cocktails.map((cocktail, index) => (
          <MenuItem
            key={cocktail.title + index}
            title={cocktail.title}
            price={cocktail.price}
            tags={cocktail.tags}
          />
        ))}
      </div>
    </div>
  </div>

);

export default Menu;
