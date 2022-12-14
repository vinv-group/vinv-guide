# Location Schema

```txt
https://schema.vinv.io/location/0.0.1.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dereferenced.doc.json](../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json "open original schema") |

## Location Type

`object` ([Location](dereferenced.md))

# Location Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                              |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [coordinates](#coordinates) | `object` | Required | cannot be null | [Location](dereferenced-properties-coordinates.md "https://schema.vinv.io/location/0.0.1.json#/properties/coordinates") |
| [accuracy](#accuracy)       | `number` | Required | cannot be null | [Location](dereferenced-properties-accuracy.md "https://schema.vinv.io/location/0.0.1.json#/properties/accuracy")       |
| [geogrid](#geogrid)         | `object` | Optional | can be null    | [Location](dereferenced-properties-geo-grid.md "https://schema.vinv.io/location/0.0.1.json#/properties/geogrid")        |

## coordinates

Anchor point of the Object on a map. Array of longitude, latitude and \[altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.

`coordinates`

*   is required

*   Type: `object` ([Coordinates](dereferenced-properties-coordinates.md))

*   cannot be null

*   defined in: [Location](dereferenced-properties-coordinates.md "https://schema.vinv.io/location/0.0.1.json#/properties/coordinates")

*   vinv:basics: https://documentation.vinv.io/coordinates/0.0.1/0.html

### coordinates Type

`object` ([Coordinates](dereferenced-properties-coordinates.md))

## accuracy

The decimal accuracy of coordinates in meter (2 decimal places max).

`accuracy`

*   is required

*   Type: `number` ([Accuracy](dereferenced-properties-accuracy.md))

*   cannot be null

*   defined in: [Location](dereferenced-properties-accuracy.md "https://schema.vinv.io/location/0.0.1.json#/properties/accuracy")

### accuracy Type

`number` ([Accuracy](dereferenced-properties-accuracy.md))

### accuracy Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `10000`

**minimum**: the value of this number must greater than or equal to: `0`

### accuracy Examples

```json
3
```

```json
12
```

## geogrid

Geographical Aggregation Grid

`geogrid`

*   is optional

*   Type: `object` ([Geo Grid](dereferenced-properties-geo-grid.md))

*   can be null

*   defined in: [Location](dereferenced-properties-geo-grid.md "https://schema.vinv.io/location/0.0.1.json#/properties/geogrid")

### geogrid Type

`object` ([Geo Grid](dereferenced-properties-geo-grid.md))
