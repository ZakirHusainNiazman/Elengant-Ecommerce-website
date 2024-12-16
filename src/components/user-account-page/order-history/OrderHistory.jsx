import React, { useEffect, useState } from "react";
import AccountBodyWrapper from "../AccountBodyWrapper";
import { useSelector } from "react-redux";

import cssClasses from "./OrderHistory.module.css";
import { formatter } from "../../../dummy-products";

function OrderHistory() {
  const orders = useSelector((state) => state.order);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = pageWidth <= 620; // Determine if the viewport is mobile-sized

  return (
    <AccountBodyWrapper title="Orders History">
      <table className={cssClasses["order-table"]}>
        {isMobile ? (
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.orderCode}>
                <tr>
                  <th>Number ID</th>
                  <td>{order.orderCode}</td>
                </tr>
                <tr>
                  <th>Dates</th>
                  <td>{order.date}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>{order.status}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{formatter(order.price)}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        ) : (
          <>
            <thead>
              <tr>
                <th>Number ID</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderCode}>
                  <td>{order.orderCode}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{formatter(order.price)}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
    </AccountBodyWrapper>
  );
}

export default OrderHistory;
