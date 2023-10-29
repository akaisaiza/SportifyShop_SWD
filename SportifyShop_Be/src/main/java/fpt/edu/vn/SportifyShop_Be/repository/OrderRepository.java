package fpt.edu.vn.SportifyShop_Be.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

import java.util.List;

@Repository
public class OrderRepository {
    @Autowired
    private EntityManager entityManager;

    public List<Object[]> getOrderDetails() {
        String jpql = "SELECT o.orderID, CONCAT(c.firstName, ' ', c.lastName) as customName, o.status, o.orderDate, SUM(od.totalPrice) as totalCost " +
                     "FROM Order o " +
                     "JOIN o.customerID c " +
                     "JOIN o.orderDetails od " +
                     "GROUP BY o.orderID, c.firstName, c.lastName, o.status, o.orderDate " +
                     "ORDER BY o.orderID";

        TypedQuery<Object[]> query = entityManager.createQuery(jpql, Object[].class);
        return query.getResultList();
    }
}
