import React, { Component ,Fragment } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from './typeheadData';
import { Typeahead } from 'react-bootstrap-typeahead';
import {FormGroup ,ButtonToolbar,Button} from 'react-bootstrap';

class TypeaheadOne extends React.Component {
    render() {
        return (
          <Fragment>
            <Typeahead
              id="public-typeahead"
              defaultSelected={options.slice(0, 4)}
              name="all_brands"
              labelKey="name"
              multiple
              options={options}
              placeholder="Choose a state..."
              ref={(ref) => this._typeahead = ref}
            />
            {/*<ButtonToolbar style={{marginTop: '10px',margin:'4px'}}>*/}
            {/*  <Button*/}
            {/*    className="m-2"*/}
            {/*    onClick={() => this._typeahead.clear()}>*/}
            {/*    Clear*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    className="m-2"*/}
            {/*    onClick={() => this._typeahead.focus()}>*/}
            {/*    Focus*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    className=" m-2" */}
            {/*    onClick={() => {*/}
            {/*      const instance = this._typeahead;*/}
            {/*      instance.focus();*/}
            {/*      setTimeout(() => instance.blur(), 1000);*/}
            {/*    }}>*/}
            {/*    Focus, then blur after 1 second*/}
            {/*  </Button>*/}
            {/*</ButtonToolbar>*/}
          </Fragment>
        );
      }
    }

export default TypeaheadOne;