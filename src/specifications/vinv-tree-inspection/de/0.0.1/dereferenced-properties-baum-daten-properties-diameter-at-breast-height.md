# Diameter at Breast Height Schema

```txt
https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/dbh
```

Diameter in centimeter

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [dereferenced.doc.json\*](../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json "open original schema") |

## dbh Type

`number` ([Diameter at Breast Height](dereferenced-properties-baum-daten-properties-diameter-at-breast-height.md))

## dbh Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

## dbh Examples

```json
34
```

```json
56
```
