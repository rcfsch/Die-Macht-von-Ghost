helm repo add bitnami https://charts.bitnami.com/bitnami
helm install
my-ghost bitnami/ghost
--Set
ghostHost=meinblog.de
--Set
ghostUsername=admin
--set
ghostPassword=secure123
