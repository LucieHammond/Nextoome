export const ActivityHours = {
	ORDERS_END: new Date(0, 0, 1, 18, 30),
	WITHDRAWAL_START: new Date(0, 0, 1, 19, 0),
	WITHDRAWAL_END: new Date(0, 0, 2, 0, 0),
	LATE_ORDERS_END: new Date(0, 0, 1, 19, 0)
};

export const Cities = [
	{name: "Lagny-sur-Marne", code: "77400", id: "lagny"}
];

export const Status = {
	"on-hold": "De côté",
	"pending": "En attente",
	"processing": "En préparation",
	"completed": "Délivré",
	"cancelled": "Annulé",
	"failed": "Echec",
	"refunded": "Remboursé"
};
