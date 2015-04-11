import _ from 'lodash';
import React from 'react';
var {DOM} = React;

import CardComponent from 'client/components/partials/card';
import NavigationBarComponent from 'client/components/partials/navigation-bar';
import {compileJsxTemplate, createPageComponentClassName} from 'client/lib/view';
import ComponentMixin from 'client/lib/mixins/component';
import PageComponentMixin from 'client/lib/mixins/page-component';
import CharactersStore from 'client/stores/characters';


export default React.createClass({
  displayName: 'EquipmentPageComponent',
  mixins: [ComponentMixin, PageComponentMixin],

  render: function render() {
    let characterElements

    return compileJsxTemplate('pages/equipment', {
      className: createPageComponentClassName('equipment'),
      style: this.createDefaultStyles(),
      navigationBar: {
        NavigationBarComponent
      },
      CardComponent,
      charactersStore: CharactersStore.getInstance()
    });
  }
});
