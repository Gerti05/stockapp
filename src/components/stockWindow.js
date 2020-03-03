import React from "react";
import Axios from "axios";
import ControlledTabs from "./stockTab";
import { Image, Row, Col, Spinner } from "react-bootstrap";

class StockWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stock_data: null,
      company_data: null,
      logo: null,
      advanced_data: null,
      symbol: "GOOGL"
    };
  }

  componentDidMount = () => {
    this.apiRequest();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.symbol !== this.props.symbol) {
      this.apiRequest();
    }
  };

  apiRequest = async () => {
    let stock_res = await Axios.get(
      `https://cloud.iexapis.com/stable/stock/${this.props.symbol}/price?token=pk_73b1f12f042b490c930419fee562da53`
    );

    let company_res = await Axios.get(
      `https://cloud.iexapis.com/stable/stock/${this.props.symbol}/company?token=pk_73b1f12f042b490c930419fee562da53`
    );

    let logo_res = await Axios.get(
      `https://cloud.iexapis.com/stable/stock/${this.props.symbol}/logo?token=pk_73b1f12f042b490c930419fee562da53`
    );

    let advanced_res = await Axios.get(
      `https://cloud.iexapis.com/stable/stock/${this.props.symbol}/advanced-stats?token=pk_73b1f12f042b490c930419fee562da53`
    );

    this.setState({
      stock_data: stock_res.data,
      logo: logo_res.data,
      company_data: company_res.data,
      advanced_data: advanced_res.data,
      loading: false
    });
  };

  render() {
    console.log(this.props.symbol, 3);
    return (
      <div>
        {this.state.loading || !this.state.logo.url ? (
          <div className="text-center">
            <Spinner className="mt-5" animation="border" variant="info" />
          </div>
        ) : (
          <div>
            {console.log(this.state.company_data)}
            <Row>
              <Col className="mt-5 mb-2 ml-1">
                <Image alt="logo" src={this.state.logo.url} fluid />
              </Col>
            </Row>
            <ControlledTabs
              info={this.state.company_data}
              stock={this.state.stock_data}
              stats={this.state.advanced_data}
            />
          </div>
        )}
      </div>
    );
  }
}

export default StockWindow;
