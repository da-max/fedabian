from graphene import Schema

from fedabian.schema import Query as fedabian_query, Mutations as fedabian_mutations, User as UserType


class Query(fedabian_query):
    pass


class Mutations(fedabian_mutations):
    pass


schema = Schema(query=Query, mutation=Mutations, types=[UserType])
