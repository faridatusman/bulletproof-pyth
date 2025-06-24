;; marine-registry.clar
;; A secure, decentralized platform for marine research data tracking and governance

;; ============================================
;; Error constants
;; ============================================
(define-constant ERR-UNAUTHORIZED (err u100))
(define-constant ERR-NONEXISTENT-RECORD (err u101))
(define-constant ERR-DUPLICATE-RECORD (err u102))
(define-constant ERR-INVALID-ACCESS-LEVEL (err u103))
(define-constant ERR-VOTING-RESTRICTION (err u104))
(define-constant ERR-PROPOSAL-CONSTRAINT (err u105))

;; ============================================
;; Access Levels
;; ============================================
(define-constant ACCESS-LEVEL-PUBLIC u1)
(define-constant ACCESS-LEVEL-PREMIUM u2)
(define-constant ACCESS-LEVEL-RESTRICTED u3)

;; Rest of the contract remains exactly the same as ocean-vault.clar