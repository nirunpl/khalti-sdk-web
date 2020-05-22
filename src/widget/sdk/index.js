import React, { useEffect, useState } from "react";
import KhaltiWallet from "./type/KhaltiWallet";
import EBanking from "./type/EBanking";
import MobileBanking from "./type/MobileBanking";
import ConnectIPS from "./type/ConnectIPS";
import SCTCard from "./type/SCTCard";

import * as styles from "../css/index.css";

import {
  EBANKING,
  EBANKING_VALUE,
  MOBILE_BANKING,
  MOBILE_BANKING_VALUE,
  KHALTI,
  KHALTI_VALUE,
  CONNECT_IPS,
  CONNECT_IPS_VALUE,
  SCT,
  SCT_VALUE,
} from "./constants/literal";

const SDK = ({
  public_key,
  product_identity,
  product_name,
  amount,
  product_url,
  hideModal,
  payment_preference,
}) => {
  const [activeTab, setActiveTab] = useState({ tab: payment_preference[0] });

  const [loading, setLoading] = useState(true);
  const getActiveTab = (obj) => {
    setActiveTab(obj);
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      {
        <div
          style={{
            position: "fixed",
            top: "0%",
            left: "0%",
            background: "rgba(0,0,0,0.75)",
            width: "100%",
            height: "100%",
          }}
        >
          {public_key && public_key.includes("test") && (
            <div>
              <span className={styles.testlabel}>TEST</span>
            </div>
          )}
          {loading && (
            <div className="ui active dimmer">
              <div className="ui text loader">Loading</div>
            </div>
          )}

          {!loading && (
            <div className={styles.modalScreen}>
              <div className="ui">
                <div
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    color: "#5d2e8e",
                    margin: "22px 0px 0px 0px",
                  }}
                >
                  Choose your payment method
                </div>
                <div style={{ padding: "20px" }}>
                  <div className={styles.parentBar}>
                    <div
                      className={
                        "ui pointing secondary menu " + styles.onHoverBar
                      }
                    >
                      {payment_preference.map((item, index) => {
                        return (
                          <a
                            className={
                              activeTab.tab == item ? "item active " : "item"
                            }
                            style={{ padding: "18px" }}
                            data-tab={item}
                            onClick={() => getActiveTab({ tab: item })}
                          >
                            {item == KHALTI && (
                              <React.Fragment>
                                <img
                                  src="assets/icons/mywallet.svg  "
                                  height="14px"
                                />
                                {KHALTI_VALUE}
                              </React.Fragment>
                            )}
                            {item == MOBILE_BANKING && (
                              <React.Fragment>
                                <img
                                  src="assets/icons/mobile-banking.svg  "
                                  height="14px"
                                />
                                {MOBILE_BANKING_VALUE}
                              </React.Fragment>
                            )}
                            {item == EBANKING && (
                              <React.Fragment>
                                <img
                                  src="assets/icons/ebanking.svg  "
                                  height="14px"
                                />
                                {EBANKING_VALUE}
                              </React.Fragment>
                            )}
                            {item == CONNECT_IPS && (
                              <React.Fragment>
                                <img
                                  src="assets/icons/connectIPS.svg  "
                                  height="14px"
                                />
                                {CONNECT_IPS_VALUE}
                              </React.Fragment>
                            )}
                            {item == SCT && (
                              <React.Fragment>
                                <img
                                  src="assets/icons/sct-card.svg  "
                                  height="14px"
                                />
                                {SCT_VALUE}
                              </React.Fragment>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute ",
                    top: 0,
                    right: 0,
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  onClick={hideModal}
                >
                  <img src="assets/icons/close.svg  " height="14px" />
                </div>
                <div className="">
                  {activeTab && activeTab.tab && (
                    <div
                      className={
                        activeTab.tab == KHALTI ? "ui tab active" : "ui tab"
                      }
                    >
                      {
                        <KhaltiWallet
                          public_key={public_key}
                          product_identity={product_identity}
                          product_name={product_name}
                          amount={amount}
                          product_url={product_url}
                        />
                      }
                    </div>
                  )}
                  <div
                    className={
                      activeTab.tab == EBANKING ? "ui tab active" : "ui tab"
                    }
                  >
                    {
                      <EBanking
                        public_key={public_key}
                        product_identity={product_identity}
                        product_name={product_name}
                        amount={amount}
                        product_url={product_url}
                      />
                    }
                  </div>
                  <div
                    className={
                      activeTab.tab == MOBILE_BANKING
                        ? "ui tab active"
                        : "ui tab"
                    }
                  >
                    {
                      <MobileBanking
                        public_key={public_key}
                        product_identity={product_identity}
                        product_name={product_name}
                        amount={amount}
                        product_url={product_url}
                      />
                    }
                  </div>
                  <div
                    className={
                      activeTab.tab == CONNECT_IPS ? "ui tab active" : "ui tab"
                    }
                  >
                    {
                      <ConnectIPS
                        public_key={public_key}
                        product_identity={product_identity}
                        product_name={product_name}
                        amount={amount}
                        product_url={product_url}
                      />
                    }
                  </div>
                  <div
                    className={
                      activeTab.tab == SCT ? "ui tab active" : "ui tab"
                    }
                  >
                    {
                      <SCTCard
                        public_key={public_key}
                        product_identity={product_identity}
                        product_name={product_name}
                        amount={amount}
                        product_url={product_url}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </React.Fragment>
  );
};
export default SDK;
